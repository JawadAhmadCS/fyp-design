export type AppScreen =
  | "landing"
  | "dashboard"
  | "model"
  | "voice"
  | "transcriber"
  | "phoneNumbers";

export interface ScreenOption {
  key: AppScreen;
  label: string;
}
