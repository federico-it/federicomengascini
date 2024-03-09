import { useState, useEffect } from "react";
import axios from "axios";
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
  const CORS_PROXY = "https://s.federicomengascini.com/";
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
              <Text fontSize={"xl"} as='b' color={useColorModeValue("white", "white")}>
                Last Check:
              </Text>
              <Text mb={5} color={"white"}>{formatDateTime(monitor.last_check)}</Text>
              <Text fontSize={"xl"} as='b' color={useColorModeValue("white", "white")}>
                Last Status Change:
              </Text>
              <Text mb={5} color={"white"}>{formatDateTime(monitor.last_status_change)}</Text>
              <Text fontSize={"xl"} as={"b"} color={useColorModeValue("white", "white")}>
                Type:
              </Text>
              <Text css={{
                "&:first-letter": {
                  textTransform: "uppercase",
                },
              }} color={"white"} mb={5}>{(monitor.type)}</Text>
              <Text fontSize={"xl"} as="b" color={useColorModeValue("white", "white")}>
                Ping:
              </Text>
              <Text color={"white"} mb={5}>{Object.entries(monitor.locations).map(([location, details]) => (
                <Text css={{
                  "&:first-letter": {
                    textTransform: "uppercase",
                  },
                }} key={location} color={useColorModeValue("white", "white")}>
                  {location}: {details.response_time} ms
                </Text>
              ))}</Text>



              {/* Additional information here */}
            </Box>
          )}
        </Box>
      ))}
    </Flex>
  );
}
