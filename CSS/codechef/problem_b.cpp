#include<bits/stdc++.h>
using namespace std;
int main()
{
    int test; cin >> test;
    while(test --)
    {
        int n, x; cin >> n >> x;
        int z = 2*n -x;
        int ans  =x-z;
        if(ans <=0) cout << 0 <<"\n";
        else cout << ans<<"\n"; 
    }
    return 0;
}