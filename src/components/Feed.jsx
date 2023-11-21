import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
// import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  // const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  // q=${selectedCategory}

  useEffect(() => {
    setVideos([]);
    fetchFromAPI(`search?part=id%2Csnippet&type=video&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          CopyRight to Shiccorama.dev
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#FFF" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;