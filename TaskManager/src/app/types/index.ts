// export type Task = {
//     id: number;
//     name: string;
// };

export interface Task {
    id: number;
    name: string;
    done: boolean;
}

export interface TaskNameChangeReq { 
    id: number;
    newName: string;
}