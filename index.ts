import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

const res = await inquirer.prompt({
    type: "number",
    name: "UserInput",
    message: "Please Enter the Amount of second",
    validate: (input)=>{
        if(isNaN(input)){
            return "Please Enter Valid Number";
        }else if (input > 60){
            return "Second must be in 60";
        }else {
            return true;
        };
    },
});

let input = res.UserInput;

function startTime(val:number){
    const inTime = new Date().setSeconds(new Date().getSeconds()+ val);
    const interValTime = new Date(inTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(interValTime,currentTime);
        if (timeDiff <= 0){
            console.log("Timer has expired");
            process.exit();
        };
        const min = Math.floor((timeDiff %(3600*24))/3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2, "0")}`);
    }, 1000);
};

startTime(input);