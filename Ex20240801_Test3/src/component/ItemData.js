import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export default function ItemData(props) {
    const list = props.itemList;
  return (
    <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>측정일시</TableCell>
              <TableCell>아황산가스 농도</TableCell>
              <TableCell>일산화탄소 농도</TableCell>
              <TableCell>오존 농도</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        {list.map((item, index)=>(
          <TableRow key={index}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{item.dataTime}</TableCell>
              <TableCell>{item.so2Value}</TableCell>
              <TableCell>{item.coValue}</TableCell>
              <TableCell>{item.o3Value}</TableCell>
          </TableRow>
        ))}
        </TableBody>
    </Table>
  )
}
