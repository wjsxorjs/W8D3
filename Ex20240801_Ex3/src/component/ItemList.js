import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import styles from "/public/css/itemList.module.css"
import Link from "next/link";

export default function ItemList(props) {
    const list = props.itemList;
    return (
        <Grid container >
            {list.map((item)=>(
                <Grid item key={item.id} xs={3}>
                    <Link href="views/[id]" as={'/views/'+item.id}>
                    <Card className={styles.card}>
                    {/* <CardMedia
                        sx={{ height: '200px'}}
                        image={item.image_link}
                        title={item.name}
                    /> */}
                        <CardContent>
                            <img className={styles.img_item} src={item.image_link} alt={item.name} title={item.name}/>
                            <div className={styles.title_item}>
                                <strong>{item.name}</strong>
                            </div>
                            <div className={styles.price_item}>[${item.price}]</div>
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
  }
  