import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import VisibilitySensor from "react-visibility-sensor";
import "style/TimelineItem.css";

const TimelineItem = (props) => {
  const {
    id,
    children,
    dateText,
    dateStyle,
    dateInnerStyle,
    iconColor,
    visibilitySensorProps,
    icon
  } = props;

  const [visible, setVisible] = useState(false);

  const onVisibilitySensorChange = (isVisible) => {
    if (isVisible) {
      setVisible(true);
    }
    else{
      setVisible(false);
    }
  };

  return (
    <div
      id={id}
      className={`entry ${children === "" ? "timeline-item--no-children" : ""}`}
      style={{ color: iconColor, margin:'50px'  }}
    >
      <VisibilitySensor
        {...visibilitySensorProps}
        onChange={onVisibilitySensorChange}
      >
        <Fragment>
          <div className={`title ${icon ? "with-icon" : ""}`}>
            <div className={`${visible ? "bounce-in" : "is-hidden"}`}>
              <span style={dateStyle} className="timeline-item-date">
                <time
                  style={dateInnerStyle}
                  className="timeline-item-dateinner"
                  title={dateText}
                >
                  {dateText}
                </time>
              </span>
              {icon && <div className="icon-container">{icon}</div>}
            </div>
          </div>

          <div className="body">
            <div
              className={`body-container ${
                visible ? "bounce-in" : "is-hidden"
              }`}
              style={{
                borderRadius: "8px",
              }}
            >
              {children}
            </div>
          </div>
        </Fragment>
      </VisibilitySensor>
    </div>
  );
};

TimelineItem.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  dateStyle: PropTypes.shape({}),
  dateInnerStyle: PropTypes.shape({}),
  iconColor: PropTypes.string,
  dateText: PropTypes.string,
  visibilitySensorProps: PropTypes.shape({}),
  icon: PropTypes.node
};

TimelineItem.defaultProps = {
  id: "",
  children: "",
  dateStyle: null,
  dateInnerStyle: null,
  iconColor: "#e86971",
  dateText: "",
  visibilitySensorProps: { partialVisibility: true, offset: { bottom: 200 } },
  icon: null
};

export default TimelineItem;