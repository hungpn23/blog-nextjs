import {
  createParser,
  createSearchParamsCache,
  parseAsString,
  parseAsStringLiteral,
} from "nuqs/server";
// Note: import from 'nuqs/server' to avoid the "use client" directive

export const parseAsPageIndex = createParser({
  parse(page) {
    const result = parseInt(page, 10);
    if (isNaN(result) || result < 1) return null;
    return result;
  },

  serialize: (page) => page.toString(),
});

export const parseAsPageSize = createParser({
  parse(pageSize) {
    const result = parseInt(pageSize, 10);
    if (isNaN(result) || result < 10) return null;
    return result;
  },

  serialize: (page) => page.toString(),
});

export const searchParamsCache = createSearchParamsCache({
  // List your search param keys and associated parsers here:
  page: parseAsPageIndex.withDefault(1),
  limit: parseAsPageSize.withDefault(10),
  order: parseAsStringLiteral(["ASC", "DESC"]).withDefault("DESC"),
  tag: parseAsString.withDefault("undefined"),
});
