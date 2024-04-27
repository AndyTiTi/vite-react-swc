import React, { useState, useEffect } from "react";
import "./Spinning.css"; // 导入CSS样式

interface SpinningProps {
  className?: string;
  style?: React.CSSProperties;
  // 可以添加更多属性，如尺寸、颜色等
}

const Spinning: React.FC<SpinningProps> = ({ className, style }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // 如果你需要在某些条件下停止旋转，可以在这里设置 false
    setIsLoading(true);
  }, []);

  const spinningClass = `spinning ${isLoading ? "" : "hidden"} ${
    className || ""
  }`;

  return (
    <div className={spinningClass} style={style}>
      <div className="spinning-inner"></div>
    </div>
  );
};

export default Spinning;
