export const ReformatData = (json)=> {
    const COLUMN_LENGTH = 10;
    let state = {};
    state.header = [];
    state.rows = [];
    for (let i = 0; i < COLUMN_LENGTH; i++) {
        state.header.push(json.fields[i].name);
    }
    /*TODO need to reduce complexity*/
    json.records.forEach((record, index)=> {
        /*TODO hack because of bad data*/
        if(index<10){
            state.rows[index] = [];
            state.header.forEach((colValue)=> {
                state.rows[index].push(record[colValue]);
            });
        }
    });
    state.total = json.total;
    state.pageLen = 10;
    return state;
};