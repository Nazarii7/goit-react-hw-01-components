
import PropTypes from "prop-types"
import { 
  SectionStatistics,
  Title,
  List,
  ListItem,
  LabelStatisric,
  Percentage, } from "./statistics.styled";
  import { getRandomHexColor } from "components/GetRandom/getrandomhex";


export const Statistics = ({title, stats}) => {
    return (
        <SectionStatistics>
  {title&&<Title>{title}</Title>}
  <List>
    {stats.map(x => (
    <ListItem key={x.id} style={{ backgroundColor: getRandomHexColor()  }}>
      <LabelStatisric>{x.label}</LabelStatisric>
      <Percentage>{x.percentage}%</Percentage>
    </ListItem>
    ))}
  </List>
</SectionStatistics>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}