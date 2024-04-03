import styles from './MultiColumn.module.css';
import {Link} from "react-router-dom";
import Video from './../video/Video'

function multiColumn(props){

    // Put all the content into columns
    let columnsJSX = props.columns.map((column) =>{

        let imageAndTitle;
        if(column.video){
            imageAndTitle = (
                <>
                    <div className={styles.columnVideoContainer}>
                        <Video
                            path={column.video.url}
                            turnOffControls={true}
                        />
                    </div>
                    <p  className={styles.columnTitle}>{column.title}</p>
                </>
            );

        }else if(column.image){
            // Use the filter passed through as props
            const filters = {
                filter: column.image.filters
            }

            imageAndTitle = (
                <>
                    <img 
                        className={styles.columnImage}
                        src={column.image.url}
                        alt={column.image.alt}
                        style={filters}
                        />
                    <p  className={styles.columnTitle}>{column.title}</p>
                </>
            );
        }
        
        if(column.link){
            const target = column.link.target ? column.link.target : "";
            if(column.link.internalLinkTo){
                imageAndTitle = (
                    <Link 
                        to={column.link.internalLinkTo}
                        target={target}
                    >
                        {imageAndTitle}
                    </Link>
                )    
            }else if(column.link.url){
                imageAndTitle = (
                    <a 
                        href={column.link.url}
                        target={target}
                    >
                        {imageAndTitle}
                    </a>
                )  
            }
        }

        return(
            <div className={styles.column}>
                {imageAndTitle}
                <p  className={styles.columnBody}>{column.body}</p>
            </div>
        )
    })

    // Sort the columns into rows,
    // Rows of 2 columns with 3 columns as an exception
        // 2 columns, 1 row
            //(x, x)

        // 3 columns, 1 row
            // (x, x, x)

        // 4 columns, 2 rows
            //(x, x)
            //(x, x)

        // 5 columns, 3 rows
            //(x, x)
            //(x, x)
            //(x)

    let rowsJSX = [];
    if(columnsJSX.length === 3){
        //What happens when it is 3
        rowsJSX = (
            <div className={`${styles.row3} ${styles.row}`}>
                {columnsJSX}
            </div>
        );
    }else{
        for(let i = 0; i < columnsJSX.length; i++){
            if(i % 2 === 0){
                //For every first column of two columns, make a row.
                //If the second item of the row doesn't exist, don't add it
                rowsJSX.push(
                    <div className={`${styles.row2} ${styles.row}`}>
                        {columnsJSX[i]}
                        {columnsJSX[i+1] ? columnsJSX[i+1] : ""} 
                    </div>
                );
            }
        }
    }
    

    return(

        <div className={styles.multiColumnContainer}>
            {rowsJSX}
        </div>

    )
}

export default multiColumn