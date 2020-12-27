import React from 'react';
import PropTypes from 'prop-types';

const StatisticsItem = ({id, label, percentage}) => {
    return (
        <li key={id} class="item">
            <span class="label">{ label}</span>
            <span class="percentage">{ percentage}</span>
    </li>
    )
}

const StatisticsList = ({ items }) => {
    if (items.length === 0) {
        return null
    }
    return (
        <ul class="stat-list">{items.map(StatisticsItem) }</ul>
    )
}

const Statistics = ({title, items }) => {
    return (
<section class="statistics">
            {title&&<h2 class="title">{title }</h2>}
            <StatisticsList items={items }/>
</section>
    )
}

StatisticsItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Statistics;