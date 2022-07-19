import styleStat from './Statistics.module.css';
import PropTypes from 'prop-types';
const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};
const Statistics = ({ title='Upload stats', stats }) => {
  return (
    <section className={styleStat.statistics}>
      <h2 className={styleStat.title}>{title}</h2>
      <ul className={styleStat.stat}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={styleStat.item}
              key={id}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={styleStat.label}>{label}</span>
              <span className={styleStat.percentage}>
                {percentage + ' %'}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf({
		id: PropTypes.string,
		label: PropTypes.string,
		percentage: PropTypes.number,
	})
};

export { Statistics };
