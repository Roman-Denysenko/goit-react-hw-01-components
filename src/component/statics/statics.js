import React from 'react';
import PropTypes from 'prop-types';

import s from './Statics.module.scss';

const StatisticsItem = ({ id, label, percentage }, i) => {
  const grayClassName = i % 2 === 1 ? s.even + ' ' + s.item : s.item;
  return (
    <li key={id} className={grayClassName}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
  );
};

const StatisticsList = ({ items }) => {
  if (items.length === 0) {
    return null;
  }
  return <ul className={s.list}>{items.map(StatisticsItem)}</ul>;
};

const Statistics = ({ title, items }) => {
  return (
    <section className={s.container}>
      {title && <h2 className={s.title}>{title}</h2>}
      <StatisticsList items={items} />
    </section>
  );
};

StatisticsItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Statistics;
