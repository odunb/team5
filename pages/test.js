import styles from "./index.module.css";

<form>
    <h1>Create youre <span className={styles.textSpan}>todo</span></h1>
    <div className={styles.inputBox}>
        <input onChange={(e)=>handle(e)} id="title" value={data.title} type="text" name="" required="required"/>
        <span>Title</span>
    </div>
    <div className={styles.inputBox}>
        <input onChange={(e)=>handle(e)} id="date" value={data.date} type="date" name="" required="required"/>
    </div>
    <div className={styles.inputBox}>
        <input onClick={handlePost} type="submit" name="" value="Create"/>
    </div>
</form>