const publicId =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_PUBLIC_ID || 0
    : process.env.DEV_PUBLIC_ID || 0;

console.log("publicId", publicId);

module.exports = {
  port: process.env.PORT || 3000,
  botToken: process.env.BOT_TOKEN || "",
  publicId,
  admins: [231704132],
};
