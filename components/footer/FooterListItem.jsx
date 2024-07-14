import Link from "next/link";
import React from "react";

function FooterListItem({ title, list }) {
  return (
    <div className="flex flex-col space-y-3">
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="flex flex-col space-y-2">
        {list.map((item) => (
          <Link key={item} href="/">
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FooterListItem;
