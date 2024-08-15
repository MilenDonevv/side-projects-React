import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import TransactionForm from "../add-transaction/transaction-form";
import TransactionChartSummary from "../chart/chart";

export default function Summary({ onClose, isOpen }) {
    return (
        <Box
            p={6}
            border={'1px solid'}
            borderColor={'gray.100'}
            overflow={'hidden'}
            borderRadius={'10'}
            background={'white'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            w="full"
        >
            <Flex
                w={'full'}
                justifyContent={'space-between'}
                alignItems={'center'}
                flexDirection={{ base: 'column', lg: 'row' }}
                gap={8}
            >
                {/* Summary Section */}
                <Flex
                    flex={'1'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    p={4}
                >
                    <Heading size={'md'} mb={'4'} color={'gray.600'}>
                        Balance is 100
                    </Heading>
                    <Flex
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        bg={'gray.50'}
                        w={'full'}
                        border={'1px solid'}
                        borderColor={'gray.100'}
                        p={4}
                        borderRadius={'10px'}
                        flexDirection={'column'}
                        gap={4}
                    >
                        <Flex flexDirection={'column'} alignItems={'center'}>
                            <Heading color={'gray.700'}>$100</Heading>
                            <Text color={'gray.600'}>Total Income</Text>
                        </Flex>
                        <Flex flexDirection={'column'} alignItems={'center'}>
                            <Heading color={'gray.700'}>$100</Heading>
                            <Text color={'gray.600'}>Total Expense</Text>
                        </Flex>
                    </Flex>
                </Flex>

                {/* Chart Section */}
                <Box
                    flex={'1'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    height={'300px'}
                    width={'300px'}
                    p={4}
                >
                    <Heading>
                        <TransactionChartSummary expense={100} income={1000} />
                    </Heading>
                </Box>
            </Flex>
            <TransactionForm onClose={onClose} isOpen={isOpen} />
        </Box>
    );
}
