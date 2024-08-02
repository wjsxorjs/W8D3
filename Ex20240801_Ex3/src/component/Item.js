import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { Divider } from '@mui/material';

import myStyles from "/public/css/Item.module.css";
import styles from "/public/css/Item.module.css";

export default function Item({item}) {
    const {
        name,
        price,
        image_link,
        category,
        product_type,
        product_link,
        description,
        updated_at,
    } = item;

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[900],
        '&:hover': {
          backgroundColor: red[500],
        },
      }));


  return (
    /*
    <div className={styles.wrapper}>
        <div className={styles.upper}>
            <img src={image_link} alt={name}/>
            <div className={styles.info}>
                <div className={styles.title_item}>{name}</div>
                <div className={styles.price_item}>${price}</div>
                <div className={styles.type_item}>{product_type}</div>
                <ColorButton className={styles.btn_item} variant="contained">구매하기</ColorButton>
            </div>
        </div>
        <Divider/>
        <h3 className={styles.description}>Description</h3>
        <div>{description}</div>
     </div>
    */
    <>
        <div className={styles.wrap}>
            <div className={styles.img_item}>
                <img src={image_link} alt={name}/>
            </div>
            <div className={styles.info_item}>
                <strong className={styles.tit_item}>{name}</strong>
                <strong className={styles.num_price}>${price}</strong>
                <span className={styles.txt_info}>
                    {category ? `${category}/`: ``}{product_type}
                </span>
                <Button variant="contained" color="error">구매하기</Button>
            </div>
        </div>
        <div className={styles.disWrap}>
            <h3>Description</h3>
            <div style={{paddingBottom: 20, fontSize: 18}}>
                {description}
            </div>
        </div>
    </>
  )
}
