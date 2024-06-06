import isValidPassword from "../Wisewatts API/myapp/Instances/CheckPassword"

describe("Password Testing", ()=>{
    it("(Johndoe@1234) Should returns valid", async ()=> {
        
        expect(isValidPassword("Johndoe@1234")).toBe(true)
    })

    it("(Johndoe) Should returns Invalid     reason: no numbers nor symbols", async ()=> {
        
        expect(isValidPassword("Johndoe")).toBe(false)
    })

    it("(Johndoe123) Should returns Invalid     reason: no symbols", async ()=> {
        
        expect(isValidPassword("Johndoe123")).toBe(false)
    })

    it("(Johndoe&) Should returns Invalid     reason: no Numbers", async ()=> {
        
        expect(isValidPassword("Johndoe&")).toBe(false)
    })

    it("(johndoe11234&) Should returns Invalid     reason: no Upper case", async ()=> {
        
        expect(isValidPassword("johndoe11234&")).toBe(false)
    })

    it("(JOHNDOE11234&) Should returns Invalid     reason: no Lower case", async ()=> {
        
        expect(isValidPassword("JOHNDOE11234&")).toBe(false)
    })

    it("(1122312331234&) Should returns Invalid     reason: no Letters", async ()=> {
        
        expect(isValidPassword("1122312331234&")).toBe(false)
    })

    it("(John3@) Should returns Invalid     reason: Less than 8 chars", async ()=> {
        
        expect(isValidPassword("John3@")).toBe(false)
    })
})