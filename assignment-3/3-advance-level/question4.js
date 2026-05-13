async function runTasks() {
  const tasks = [
    fetchData1(),
    fetchData2(),
    fetchData3(),
    fetchData4(),
    fetchData5(),
  ];

  const results = await Promise.allSettled(tasks);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Task ${index + 1} success:`, result.value);
    } else {
      console.error(`Task ${index + 1} failed:`, result.reason);
    }
  });
}