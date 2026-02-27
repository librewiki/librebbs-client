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
  confirmedEmail: boolean;
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
  displayName: string;
  name: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

async function getBoards(): Promise<Board[]> {
  const { data } = await client.get<Board[]>(`/boards`);
  return data;
}

interface Topic {
  id: number;
  boardId: number;
  title: string;
  isClosed: boolean;
  isSuspended: boolean;
  isHidden: boolean;
  isPinned: boolean;
  authorId: null | number;
  authorName: string;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
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
    boardId: boardId,
    title,
    content,
  });
  return data;
}

async function hideTopic(topicId: number): Promise<Topic> {
  const { data } = await client.put<Topic>(`/topics/${topicId}/status`, {
    isHidden: true,
  });
  return data;
}

async function unhideTopic(topicId: number): Promise<Topic> {
  const { data } = await client.put<Topic>(`/topics/${topicId}/status`, {
    isHidden: false,
  });
  return data;
}

async function suspendTopic(topicId: number): Promise<Topic> {
  const { data } = await client.put<Topic>(`/topics/${topicId}/status`, {
    isSuspended: true,
  });
  return data;
}

async function unsuspendTopic(topicId: number): Promise<Topic> {
  const { data } = await client.put<Topic>(`/topics/${topicId}/status`, {
    isSuspended: false,
  });
  return data;
}

async function closeTopic(topicId: number): Promise<Topic> {
  const { data } = await client.put<Topic>(`/topics/${topicId}/status`, {
    isClosed: true,
  });
  return data;
}

async function uncloseTopic(topicId: number): Promise<Topic> {
  const { data } = await client.put<Topic>(`/topics/${topicId}/status`, {
    isClosed: false,
  });
  return data;
}

async function pinTopic(topicId: number): Promise<Topic> {
  const { data } = await client.put<Topic>(`/topics/${topicId}/status`, {
    isPinned: true,
  });
  return data;
}

async function unpinTopic(topicId: number): Promise<Topic> {
  const { data } = await client.put<Topic>(`/topics/${topicId}/status`, {
    isPinned: false,
  });
  return data;
}

interface Comment {
  id: number;
  topicId: number;
  content: null | string;
  authorId: null | number;
  authorName: string;
  isHidden: boolean;
  createdAt: string;
  updatedAt: string;
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
      showHidden: showHidden,
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
    isHidden: true,
  });
  return data;
}

async function unhideComment(commentId: number): Promise<Comment> {
  const { data } = await client.put<Comment>(`/comments/${commentId}/status`, {
    isHidden: false,
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
