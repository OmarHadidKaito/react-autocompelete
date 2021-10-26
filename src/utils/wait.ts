//This function is to simulate a call api
const wait = (time: number): Promise<void> => new Promise((res) => setTimeout(res, time));

export default wait;