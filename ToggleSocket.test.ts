import SocketRepository from '../Wisewatts API/myapp/WiseWatts.infra/Repositories/SocketRespository';

const socketRepository = new SocketRepository()

describe("toggle testing", ()=> {
  it("Change the socket state from false to true", async ()=> {
    await socketRepository.UpdateSocket(26, "MockRoom", false, 11111, 74, 1, 1)


    const socket = await socketRepository.FindSocketById(26)
    await socketRepository.ToggleSocket(26)

    const socketRresult1 = await socketRepository.FindSocketById(26);
    expect(socketRresult1[0].state).toBe(true);
  })


  it("Change the socket state from true to false", async ()=> {
    await socketRepository.ToggleSocket(26)

    const socketRresult2 = await socketRepository.FindSocketById(26);
    expect(socketRresult2[0].state).toBe(false);

  })

  it("Multiple toggles change state correctly", async () => {
    await socketRepository.ToggleSocket(26);
    let socketResult = await socketRepository.FindSocketById(26);
    expect(socketResult[0].state).toBe(true);

    await socketRepository.ToggleSocket(26);
    socketResult = await socketRepository.FindSocketById(26);
    expect(socketResult[0].state).toBe(false);

    await socketRepository.ToggleSocket(26);
    socketResult = await socketRepository.FindSocketById(26);
    expect(socketResult[0].state).toBe(true);
  });

  it("should return empty array for non-existent socket ID in find operation", async () => {
    const socketResult = await socketRepository.FindSocketById(999);
    expect(socketResult).toEqual([]);
  });
  
})