import ScheduleRepository from '../Wisewatts API/myapp/WiseWatts.infra/Repositories/ScheduleRepository';

const scheduleRepository = new ScheduleRepository()

describe("toggle testing", ()=> { 
  const id = 31
  const schedDate = new Date(new Date().toLocaleDateString());
  it("Change the schedule state from false to true", async ()=> {
    await scheduleRepository.UpdateSchedule(id, schedDate, schedDate, false, 26)


    const schedule = await scheduleRepository.FindScheduleById(id)
    await scheduleRepository.ToggleSchedule(id)

    const scheduleRresult = await scheduleRepository.FindScheduleById(id);
    expect(scheduleRresult[0].state).toBe(true);
  })


  it("Change the schedule state from true to false", async ()=> {
    await scheduleRepository.ToggleSchedule(id)

    const scheduleRresult = await scheduleRepository.FindScheduleById(id);
    expect(scheduleRresult[0].state).toBe(false);

  })

  it("Multiple toggles change state correctly", async () => {
    await scheduleRepository.ToggleSchedule(id);
    let scheduleRresult = await scheduleRepository.FindScheduleById(id);
    expect(scheduleRresult[0].state).toBe(true);

    await scheduleRepository.ToggleSchedule(id);
    scheduleRresult = await scheduleRepository.FindScheduleById(id);
    expect(scheduleRresult[0].state).toBe(false);

    await scheduleRepository.ToggleSchedule(id);
    scheduleRresult = await scheduleRepository.FindScheduleById(id);
    expect(scheduleRresult[0].state).toBe(true);
  });

  it("should return empty array for non-existent socket ID in find operation", async () => {
    const scheduleRresult  = await scheduleRepository.FindScheduleById(999);
    expect(scheduleRresult).toEqual([]);
  });
  
})