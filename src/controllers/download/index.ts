import path from "path";
import {fork} from "child_process";
import fs from "fs";
import fsp from "fs/promises";

module.exports.download = async (req: any, res: any) => {
    const child_process_path = path.join(__dirname, './test.js');
    const process_free_batch_details = fork(child_process_path);
    process_free_batch_details.send({name: "raj", age: 30, gender: "male"});

    fs.readFile(path.join(__dirname, '/test.js'), (err, data) => {
        console.log(err, data);
    })

    const data = await fsp.readFile(path.join(__dirname, '/test.js'), 'utf-8');
    console.log(data);

    res.status(200).json({message: 'Downloaded file successfully'});
}
