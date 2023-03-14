#include <stdio.h>
#include <stdint.h>

uint64_t xorshift(){
	static uint64_t state = 0xFFFFFFFFFFFFFFFF;
	uint64_t n = 0;
	for(int i = 0; i < 64; i++){
		n <<= 1;
		n |= state & 1;

		state >>= 1;
		uint64_t tap1 = (state & 0x0001000000000000) << 15;
		uint64_t tap2 = (state & 0x0000000100000000) << 31;
		state |= tap1 ^ tap2;
	}
	return n;
}

int main(){

	for(int i = 0; i < 10; i++){
		printf("%llu\n", xorshift());
	}

	return 0;
}