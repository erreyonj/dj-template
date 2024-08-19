const buildConfig = () => {
  const blogId = process.env.NEXT_PUBLIC_APP_ID || 'DJ-Khaaliq';
  if (!blogId) throw new Error("NEXT_PUBLIC_APP_ID is missing");
  const name = process.env.NEXT_PUBLIC_APP_DISPLAY_NAME || 'DJ-Khaaliq';
  const copyright = process.env.NEXT_PUBLIC_APP_COPYRIGHT;
  const defaultTitle = process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE || 'DJ-Template';
  const defaultDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION;
  const ytAPIkey = process.env.YT_API_KEY;

  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    app: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: defaultDescription,
      },
      ytapi: ytAPIkey
    },
    ogImageSecret:
      process.env.OG_IMAGE_SECRET ||
      "secret_used_for_signing_and_verifying_the_og_image_url",
    wisp: {
      blogId,
    },
  }
};

export const config = buildConfig();
