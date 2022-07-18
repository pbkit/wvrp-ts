import { atom } from "jotai";
import type { RpcClientImpl } from "https://deno.land/x/pbkit@v0.0.45/core/runtime/rpc.ts";
import { Socket } from "../socket.ts";
import { createIosSocket } from "../glue/ios.ts";
import { createWrpChannel, WrpChannel } from "../channel.ts";
import { createWrpClientImpl } from "../rpc/client.ts";
import { createWrpGuest, WrpGuest } from "../guest.ts";
import { createAndroidSocket } from "../glue/android.ts";
import { createParentWindowSocket } from "../glue/parent-window.ts";

export const socket = atom<Promise<Socket | undefined>>(async () => {
  return await Promise.any([
    createAndroidSocket(),
    createIosSocket(),
    createParentWindowSocket({ parentWindowOrigin: "*" }),
  ]).catch(() => undefined);
});

export const channel = atom<WrpChannel | undefined>((get) => {
  const _socket = get(socket);
  if (!_socket) return;
  return createWrpChannel(_socket);
});

export const guest = atom<Promise<WrpGuest | undefined>>(async (get) => {
  const _channel = get(channel);
  if (!_channel) return;
  return await createWrpGuest({ channel: _channel });
});

export const client = atom<RpcClientImpl | undefined>((get) => {
  const _guest = get(guest);
  if (!_guest) return;
  return createWrpClientImpl({ guest: _guest });
});