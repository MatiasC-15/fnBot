const handler = async (m, {conn}) => {
  m.reply(global.excusas);
};
handler.command = /^(excusas|excu)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.excusas = `
𝐘𝐚 𝐬𝐚𝐛𝐞𝐦𝐨𝐬 𝐪𝐮𝐞 𝐭𝐞 𝐯𝐚 𝐚 𝐝𝐞𝐭𝐨𝐧𝐚𝐫 𝐭𝐮 𝐭í𝐨 𝐦𝐞𝐣𝐨𝐫 𝐧𝐨 𝐝𝐢𝐠𝐚𝐬 𝐧𝐚𝐝𝐚 𝐠𝐨𝐥𝐨𝐳𝐨🔥
`;
