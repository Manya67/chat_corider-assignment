import { chatInterface } from "./ChatInterface";

export const tempData: dataInterface = {
  from: "Loading",
  message: "",
  name: "Loading",
  status: "success",
  to: "Loading",
  chats: [
    {
      id: "6693d962cbdc416bb7c22f72e7ada6b3",
      message:
        "Cras vel elit sed mi placerat pharetra eget vel odio.Aenean ullamcorper orci et vulputate fermentum.",
      sender: {
        image:
          "https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0",
        is_kyc_verified: true,
        self: false,
        user_id: "73785ed67d034f6290b0334c6e756433",
      },
      time: "2024-03-05 21:30:02",
    },
  ],
};
export interface dataInterface {
  from: string;
  message: string;
  name: string;
  status: string;
  to: string;
  chats: chatInterface[];
}
