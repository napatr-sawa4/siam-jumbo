// GitHub project Pages uses a subdirectory; local and root-domain builds use "".
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

export function assetPath(path: string | undefined) {
  return path?.startsWith("/") ? `${basePath}${path}` : path;
}
