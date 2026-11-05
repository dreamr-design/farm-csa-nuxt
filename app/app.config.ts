// Every site setting; the layout and pages read it through useAppConfig()
export default defineAppConfig({
  title: "Bramblecut Farm",
  description: "Bramblecut Farm grows certified organic vegetables on 22 acres near Viroqua, Wisconsin. Join the CSA for twenty weekly crates, stop by the farm stand, or eat at a farm dinner.",
  // Chatsy agent id. Create a free AI chat agent at https://chatsy.ai, paste its id here, and a chat button appears on every page. Leave empty for no chat button.
  chatsy_agent_id: "",
  // Slapform form id. Create a free form at https://slapform.com and paste its id here; every form on the site then delivers to your inbox with spam protection.
  slapform_form_id: "",
});
