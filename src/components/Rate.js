import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

export default function SimpleRating() {
  const [value, setValue] = React.useState(5);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
