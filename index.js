require("dotenv").config();
const { publicId, botToken, admins } = require("./config");

const { Telegraf } = require("telegraf");

const bot = new Telegraf(botToken);

bot.start((ctx) => ctx.reply("Welcome!"));

bot.on("forward", (ctx) => {
  // if (admins.includes(ctx.from.id)) {
  if (ctx.message.photo) {
    let image;
    ctx.message.photo.forEach((el) => {
      if (!image) {
        image = el;
        return;
      }
      if (el.file_size > image.file_size) {
        image = el;
      }
    });
    return bot.telegram.sendPhoto(publicId, image.file_id);
  }

  if (ctx.message.video) {
    return bot.telegram.sendVideo(
      publicId,
      ctx.message.video.file_id,
      ctx.message.video
    );
  }

  ctx.reply("Sorry! I dont know what to do");
  // }
});

bot.launch();
