import axios from "axios";
import dayjs from "dayjs";

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
  likes: number;
  timestamp: dayjs.Dayjs;
  uniqueId: string;
}
