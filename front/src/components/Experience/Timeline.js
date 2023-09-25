import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "style/Timeline.css";

const Timeline = ({ animate, children, className }) => (
  <div className="timeline--wrapper">
    <div
      className={classNames(className, "timeline", {
        "timeline--animate": animate
      })}
    >
      {children}
    </div>
  </div>
);

Timeline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  animate: PropTypes.bool
};

Timeline.defaultProps = {
  animate: true,
  className: ""
};

export default Timeline;