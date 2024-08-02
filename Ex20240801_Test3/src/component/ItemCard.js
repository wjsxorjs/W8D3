import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";


export default function ItemCard(props) {
    const list = props.itemList;
  return (
    <Grid container>
      {list.map((item,index)=>{
        return(
          <Grid key={index} item xs={4}>
            <Card sx={{ maxWidth: 200, margin: 1 }}>
              <CardHeader
                title="대기오염도"
                subheader={item.dataTime}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  아황산가스 농도: {item.so2Value}<br/>
                  일산화탄소 농도: {item.coValue}<br/>
                  오존 농도: {item.o3Value}<br/>
                </Typography>
              </CardContent>
            </Card>
        </Grid>
      )})}
    </Grid>
  )
}
