import { Json } from "../core";
import { ThirdwebAuthConfig } from "./types";
import { NextRequest } from "next/server";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next/types";
export * from "./types";
export declare function ThirdwebAuth<TData extends Json = Json, TSession extends Json = Json>(cfg: ThirdwebAuthConfig<TData, TSession>): {
    ThirdwebAuthHandler: (...args: [] | [NextApiRequest, NextApiResponse]) => Promise<void> | ((req: NextApiRequest, res: NextApiResponse) => Promise<void>);
    getUser: (req: GetServerSidePropsContext["req"] | NextRequest | NextApiRequest) => Promise<import("./types").ThirdwebAuthUser<TData, TSession> | null>;
};
//# sourceMappingURL=index.d.ts.map