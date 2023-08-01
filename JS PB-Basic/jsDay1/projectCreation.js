function projectCreation(input){
    let name = input[0]
    let project = Number(input[1])
    let hour = project * 3
    console.log (`The architect ${name} will need ${hour} hours to complete ${project} project/s.`)
}
projectCreation(["George","4"]) //The architect George will need 12 hours to complete 4 project/s.