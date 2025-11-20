"use client";

import { useServerInsertedHTML } from "next/navigation";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import React from "react";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache({ key: "mui", prepend: true });

    cache.compat = true;

    const prevInsert = cache.insert;
    const inserted: string[] = [];

    cache.insert = (selector, serialized, sheet, shouldCache) => {
      if (!cache.inserted[serialized.name]) {
        inserted.push(serialized.name);
      }

      return prevInsert(selector, serialized, sheet, shouldCache);
    };

    const flush = () => {
      const prev = [...inserted];
      inserted.length = 0;
      return prev;
    };

    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();

    if (names.length === 0) return null;

    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: names.map((name) => cache.inserted[name]).join(" "),
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
