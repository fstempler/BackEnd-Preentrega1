import { error } from "console";
import fs from "fs";
import path from "path";

const validateFilePathAndName = (filepath, filename) => {
    if (!filepath) throw new error("FILE ROUTE NOT FOUND");
    if (!filename) throw new error("FILE NAME NOT FOUND");
};

export const readJsonFile = async (filepath, filename) => {    
    validateFilePathAndName(filepath, filename);
    try{
        const content = await fs.promises.readFile(path.join(filepath, filename), "utf8");
        return JSON.parse(content || "[]"); 
    } catch (error) {
        throw new Error("RECORD NOT FOUND");
    }
}

export const writeJsonFile = async (filepath, filename, content) => {    
    validateFilePathAndName(filepath, filename);

    if (!content) throw new error("CONTENT NOT FOUND");
    try{
        await fs.promises.writeFile(path.join(filepath, filename), JSON.stringify(content, null, "\t"), "utf8");        
    } catch (error) {
        throw new Error("RECORD NOT FOUND");
    }
};