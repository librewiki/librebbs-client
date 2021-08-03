import axios from "axios";
import type { LockManager } from "navigator.locks";
import { refreshToken } from "@/auth";

declare global {
  interface Navigator {
    locks: LockManager;
  }
}

const client = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_HOST,
  withCredentials: true,
});

client.interceptors.response.use(
  async (response) => response,
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401 && error.response.data === "TokenExpired") {
      const originalRequest = config;
      await refreshToken();
      return client(originalRequest);
    }
    return Promise.reject(error);
  }
);

interface UserInfo {
  id: number;
  blocked: boolean;
  confirmed_email: boolean;
  email: string;
  groups: string[];
  rights: string[];
  username: string;
}

async function getUserInfo(): Promise<UserInfo> {
  const { data } = await client.get<UserInfo>("/me");
  return data;
}

interface Board {
  id: number;
  display_name: string;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

async function getBoards(): Promise<Board[]> {
  const { data } = await client.get<Board[]>(`/boards`);
  return data;
}

interface Topic {
  id: number;
  board_id: number;
  title: string;
  is_closed: boolean;
  is_suspended: boolean;
  is_hidden: boolean;
  is_pinned: boolean;
  author_id: null | number;
  author_name: string;
  comment_count: number;
  created_at: string;
  updated_at: string;
}

async function getTopics(
  boardId: number,
  offset: number,
  limit: number
): Promise<Topic[]> {
  const { data } = await client.get<Topic[]>(`/boards/${boardId}/topics`, {
    params: {
      offset,
      limit,
    },
  });
  return data;
}

async function getTopic(topicId: number): Promise<Topic> {
  const { data } = await client.get<Topic>(`/topics/${topicId}`);
  return data;
}

async function postTopic(
  boardId: number,
  title: string,
  content: string
): Promise<Topic> {
  const { data } = await client.post<Topic>("/topics", {
    board_id: boardId,
    title,
    content,
  });
  return data;
}

async function hideTopic(topicId: number): Promise<Topic> {
  const { data } = await client.put<Topic>(`/topics/${topicId}/status`, {
    is_hidden: true,
  });
  return data;
}

async function unhideTopic(topicId: number): Promise<Topic> {
  const { data } = await client.put<Topic>(`/topics/${topicId}/status`, {
    is_hidden: false,
  });
  return data;
}

async function suspendTopic(topicId: number): Promise<Topic> {
  const { data } = await client.put<Topic>(`/topics/${topicId}/status`, {
    is_suspended: true,
  });
  return data;
}

async function unsuspendTopic(topicId: number): Promise<Topic> {
  const { data } = await client.put<Topic>(`/topics/${topicId}/status`, {
    is_suspended: false,
  });
  return data;
}

async function closeTopic(topicId: number): Promise<Topic> {
  const { data } = await client.put<Topic>(`/topics/${topicId}/status`, {
    is_closed: true,
  });
  return data;
}

async function uncloseTopic(topicId: number): Promise<Topic> {
  const { data } = await client.put<Topic>(`/topics/${topicId}/status`, {
    is_closed: false,
  });
  return data;
}

async function pinTopic(topicId: number): Promise<Topic> {
  const { data } = await client.put<Topic>(`/topics/${topicId}/status`, {
    is_pinned: true,
  });
  return data;
}

async function unpinTopic(topicId: number): Promise<Topic> {
  const { data } = await client.put<Topic>(`/topics/${topicId}/status`, {
    is_pinned: false,
  });
  return data;
}

interface Comment {
  id: number;
  topic_id: number;
  content: null | string;
  author_id: null | number;
  author_name: string;
  is_hidden: boolean;
  created_at: string;
  updated_at: string;
}

async function getComments(
  topicId: number,
  offset: number,
  limit: number
): Promise<Comment[]> {
  const { data } = await client.get<Comment[]>(`/topics/${topicId}/comments`, {
    params: {
      offset,
      limit,
    },
  });
  return data;
}

async function getComment(
  commentId: number,
  showHidden: boolean
): Promise<Comment> {
  const { data } = await client.get<Comment>(`/comments/${commentId}`, {
    params: {
      show_hidden: showHidden,
    },
  });
  return data;
}

async function postComment(
  topicId: number,
  content: string
): Promise<Comment[]> {
  const { data } = await client.post(`/topics/${topicId}/comments`, {
    content,
  });
  return data;
}

async function hideComment(commentId: number): Promise<Comment> {
  const { data } = await client.put<Comment>(`/comments/${commentId}/status`, {
    is_hidden: true,
  });
  return data;
}

async function unhideComment(commentId: number): Promise<Comment> {
  const { data } = await client.put<Comment>(`/comments/${commentId}/status`, {
    is_hidden: false,
  });
  return data;
}

interface FileResponse {
  path: string;
}

async function postFile(
  filename: string,
  content: string
): Promise<FileResponse> {
  const { data } = await client.post<FileResponse>("/files", {
    filename,
    content,
  });
  return data;
}

export {
  getUserInfo,
  getBoards,
  getTopics,
  getTopic,
  getComment,
  getComments,
  postTopic,
  postComment,
  postFile,
  hideComment,
  unhideComment,
  hideTopic,
  unhideTopic,
  suspendTopic,
  unsuspendTopic,
  closeTopic,
  uncloseTopic,
  pinTopic,
  unpinTopic,
};
export type { UserInfo, Board, Topic, Comment };
