export const FINDMODEL = 'select * from model';
export const ADDMODEL = 'INSERT INTO model (brandName,modelName) VALUES ?';
export const SELEMODEL = `select * from model where brandName =? and isShow = 1 order by modelID asc`
export const SELEMODELADMIN = `select * from model where brandName =? order by modelID asc`
export const SHOWMODEL = `UPDATE model SET isShow = 1 WHERE modelID = ?`;
export const UNSHOMODEL = `UPDATE model SET isShow = 0 WHERE modelID = ?`;