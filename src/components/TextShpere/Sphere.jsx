import React from "react";
import allIcons from "simple-icons";
import { v4 } from "uuid";
import { IconCloud } from "react-icon-cloud";
const Sphere = () => {
  const tagCanvasOptions = {
    imageScale: 2,
    initial: [0.1, -0.1],
    reverse: true,
    tooltip: "native", // null | 'div'
    tooltipDelay: 0,
    wheelZoom: true
  };
  const iconSlugs = [
    "java", "spring","react","html5","nodedotjs","express","nextdotjs","amazonaws","postgresql","firebase","vercel","jest","docker","git","github","visualstudiocode", "intellijidea",
    "mysql", "mongodb", "linux", "typescript", "javascript", "python", "css3", "kubernetes", "junit5", "amazons3"
  ];
  const iconTags = iconSlugs.map((slug) => ({
    id: slug,
  simpleIcon: allIcons.Get(slug) }));
return (
  <div>
    <p className='text-green-500 text-5xl text-center'>Skills</p>
    <div className="container-sphere m-sphere-auto">
      <IconCloud
        key={v4()}
        id={"icon"}
        minContrastRatio={1}
        iconSize={40}
        backgroundHexColor={"#fff"}
        fallbackHexColor={"#000"}
        tags={iconTags}
        tagCanvasOptions={tagCanvasOptions}
      />
    </div>
  </div>
)}
export default Sphere;