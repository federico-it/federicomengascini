import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import {
  Flex,
  Text,
  Box,
  Badge,
  Button,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";

interface MonitorData {
  id: string;
  name: string;
  type: string;
  uptime_status: string;
  locations: Record<string, any>;
  response_time: number;
  uptime: string;
  uptime_incl_maint: string;
  last_check: number;
  last_status_change: number;
}

export default function Status() {
  const [monitorData, setMonitorData] = useState<MonitorData[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const API_URL = "https://api.hetrixtools.com/v3/uptime-monitors";
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${CORS_PROXY}${API_URL}`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HETRIX_TOOLS_API_TOKEN}`,
        },
      });
      setMonitorData(response.data.monitors);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  const formatDateTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date
      .getFullYear()
      .toString()
      .slice(-2)} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return formattedDate;
  };

  const getStatusColor = (status: string) => {
    return status === "up" ? "green.500" : "red.500";
  };

  const calculateUptimePercentage = (uptime: string) => {
    const uptimeNumber = parseFloat(uptime);
    return uptimeNumber.toFixed(2);
  };

  if (isLoading) {
    return (
      <Flex justify="center" align="center" h="100vh">
        <Spinner size="lg" color="gray.500" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Box color="red.500" textAlign="center">
        Error: {error}
      </Box>
    );
  }

  if (!monitorData || monitorData.length === 0) {
    return null;
  }

  const isAllOnline = monitorData.every((monitor) => monitor.uptime_status === "up");

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${CORS_PROXY}${API_URL}`, {
        headers: {
          Authorization:'Bearer ${process.env.HETRIX_TOOLS_API_TOKEN}',
        },
      });
      setMonitorData(response.data.monitors);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data");
      setIsLoading(false);
    }
  };

  return (
    <Flex direction="column" align="center">
      <Button
        size="lg"
        fontWeight="bold"
        colorScheme="gray"
        mt={4}
        onClick={handleRefresh}
      >
        Refresh
      </Button>
      <Badge
        px={30}
        py={15}
        borderRadius="md"
        fontWeight="bold"
        color={isAllOnline ? "green.500" : "red.500"}
        my={4}
        colorScheme={isAllOnline ? "green" : "red"}
      >
        {isAllOnline ? "All systems operational" : "There are some problems"}
      </Badge>
      <Text fontSize="sm">Click on monitor tab for more infos</Text>
      {monitorData.map((monitor) => (
        <Box
          key={monitor.id}
          bg="blue.800"
          shadow="md"
          w="full"
          rounded="md"
          my={4}
          py={4}
          px={4}
        >
          <Flex
            justify="space-between"
            align="center"
            cursor="pointer"
            onClick={() => toggleExpand(monitor.id)}
          >
            <Flex align="center">
              <Text
                fontSize="xl"
                fontWeight="bold"
                color={getStatusColor(monitor.uptime_status)}
                mr={2}
              >
                {monitor.uptime_status === "up" ? "Online" : "Offline"}
              </Text>
              <Text color={"white"} fontSize="xl">{monitor.name}</Text>
            </Flex>
            <Text color={"white"} fontSize="lg">{`${calculateUptimePercentage(
              monitor.uptime
            )}%`}</Text>
          </Flex>
          {expandedId === monitor.id && (
            <Box mt={4}>
              <Text color={useColorModeValue("gray.300", "gray.300")}>
                Type: {(monitor.type)}
              </Text>
              <Text color={useColorModeValue("gray.300", "gray.300")}>
                Ping from countries:
                {Object.entries(monitor.locations).map(([location, details]) => (
                <Text key={location} color={useColorModeValue("gray.300", "gray.300")}>
                   - {location}: {details.response_time} ms
                </Text>
              ))}
              </Text>
              

              <Text color={useColorModeValue("gray.300", "gray.300")}>
                Last Check: {formatDateTime(monitor.last_check)}
              </Text>
              <Text color={useColorModeValue("gray.300", "gray.300")}>
                Last Status Change: {formatDateTime(monitor.last_status_change)}
              </Text>
              {/* Additional information here */}
            </Box>
          )}
        </Box>
      ))}
    </Flex>
  );
}
