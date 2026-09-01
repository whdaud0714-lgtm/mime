"use client";

import { useSyncExternalStore } from "react";

const noSubscribe = () => () => {};

/**
 * 하이드레이션 안전하게 '클라이언트에서만 알 수 있는 값'을 읽는다.
 * 서버/첫 렌더에서는 server 값을, 클라이언트에서는 get() 결과를 사용한다.
 * (useEffect + setState 패턴을 대체 — 캐스케이딩 렌더 없음)
 */
export function useClientValue<T>(get: () => T, server: T): T {
  return useSyncExternalStore(noSubscribe, get, () => server);
}
