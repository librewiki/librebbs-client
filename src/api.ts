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
  author_id: null | number;
  author_name: string;
  created_at: string;
  updated_at: string;
}

async function getTopics(boardId: number): Promise<Topic[]> {
  const { data } = await client.get<Topic[]>(`/boards/${boardId}/topics`);
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
): Promise<void> {
  console.log(boardId, title, content);
  await client.post("/topics", {
    board_id: boardId,
    title,
    content,
  });
}

interface Comment {
  id: number;
  topic_id: number;
  content: string;
  author_id: null | number;
  author_name: string;
  is_hidden: boolean;
  created_at: string;
  updated_at: string;
}

async function getComments(topicId: number): Promise<Comment[]> {
  const { data } = await client.get<Comment[]>(`/topics/${topicId}/comments`);
  return data;
}

export { getUserInfo, getBoards, getTopics, getTopic, getComments, postTopic };
export type { UserInfo, Board, Topic, Comment };
