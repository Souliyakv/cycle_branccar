export const FINDBRAND = 'select * from brand where isShow = 1 order by brandID asc';
export const FINDBRANDADMIN = 'select * from brand order by brandID asc';
export const INSERTBRAND = 'INSERT INTO brand(brandName) VALUES ?';
export const SHOWBRAND = `UPDATE brand SET isShow = 1 WHERE brandID = ?`;
export const UNSHOWBRAND = `UPDATE brand SET isShow = 0 WHERE brandID = ?`;