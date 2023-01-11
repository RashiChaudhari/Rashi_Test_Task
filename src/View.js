import React from "react";
const View=({descriptions})=>{
    return(
        descriptions?.map(item=>(
            <tr>
                
                <td>{item.diagnosed}</td>
                
                <td>{item.physical}</td>
                <td>{item.mental}</td>
                <td>{item.how_experience_prob}</td>
                <td>{item.when_experience_prob}</td>
                <td>{item.scale}</td>
            </tr>
        ))
    )
}
export default View