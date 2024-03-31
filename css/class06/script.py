from langchain.agents.openai_assistant import OpenAIAssistantRunnable
agent = OpenAIAssistantRunnable(assistant_id="asst_QcR4LdBTxIwduhLvPTiHHyEM", as_agent=True)
response = agent.invoke({"content": "time to checkin"})
print(response.return_values["output"])